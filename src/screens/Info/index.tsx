import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import DeviceInfo from "react-native-device-info";
import { NetworkInfo } from "react-native-network-info";
import { Header } from "@/components/Header";
import { s } from "./styles";
import { Loading } from "../Loading";

export function Info() {
  const [deviceData, setDeviceData] = useState<any>(null);

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const appVersion = DeviceInfo.getVersion();
        const systemVersion = DeviceInfo.getSystemVersion();
        const manufacturer = await DeviceInfo.getManufacturer();
        const model = DeviceInfo.getModel();
        const freeDiskStorage = await DeviceInfo.getFreeDiskStorage();
        const freeDiskGB = (freeDiskStorage / 1024 ** 3).toFixed(2);

        const ip = await NetworkInfo.getIPV4Address();
        const subnet = await NetworkInfo.getSubnet();
        const gateway = await NetworkInfo.getGatewayIPAddress();

        setDeviceData({
          appVersion,
          systemVersion,
          manufacturer,
          model,
          freeDiskGB,
          ip: ip || "Não encontrado",
          subnet: subnet || "Não encontrado",
          gateway: gateway || "Não encontrado",
        });
      } catch (err) {
        console.error("Erro ao buscar informações do dispositivo:", err);
      }
    };

    fetchDeviceData();
  }, []);

  if (!deviceData) {
    return <Loading setLoading={deviceData} />;
  }

  return (
    <View style={s.container}>
      <Header goBack />
      <View style={s.content}>
        <View style={s.card}>
          <Text style={s.title}>Informações do App</Text>
          <Text style={s.text}>Versão do App: {deviceData.appVersion}</Text>
        </View>

        <View style={s.card}>
          <Text style={s.title}>Informações do Sistema</Text>
          <Text style={s.text}>
            Versão do Sistema: {deviceData.systemVersion}
          </Text>
          <Text style={s.text}>Fabricante: {deviceData.manufacturer}</Text>
          <Text style={s.text}>Modelo: {deviceData.model}</Text>
          <Text style={s.text}>
            Espaço Livre em Disco: {deviceData.freeDiskGB} GB
          </Text>
        </View>

        <View style={s.card}>
          <Text style={s.title}>Rede</Text>
          <Text style={s.text}>IP Local (IPv4): {deviceData.ip}</Text>
          <Text style={s.text}>Máscara de Sub-rede: {deviceData.subnet}</Text>
          <Text style={s.text}>Gateway (Roteador): {deviceData.gateway}</Text>
        </View>
      </View>
    </View>
  );
}
