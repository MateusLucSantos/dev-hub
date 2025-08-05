import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { View } from "react-native";
import { colors } from "@/theme";

interface BottomSheetContexType {
  openBottomSheet: (content: React.ReactNode, index: number) => void;
  closeBottomSheet: () => void;
}

export const BottomSheetContext = createContext({} as BottomSheetContexType);

export function BottomSheetProvider({ children }: PropsWithChildren) {
  const [content, setContent] = useState<React.ReactNode>(null);
  const [index, setIndex] = useState(-1);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["70%", "90%"];

  const openBottomSheet = useCallback(
    (newContent: React.ReactNode, toIndex: number) => {
      setContent(newContent);
      setIndex(toIndex);
      requestAnimationFrame(() => {
        bottomSheetRef.current?.snapToIndex(toIndex);
      });
    },
    []
  );

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
    setContent(null);
    setIndex(-1);
  }, []);

  const handleSheetChanges = useCallback((i: number) => {
    if (i === -1) {
      setContent(null);
    }
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    []
  );

  return (
    <BottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet }}>
      {children}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={index}
        enablePanDownToClose
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: colors.gray[300],
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 9,
        }}
      >
        <BottomSheetScrollView>{content}</BottomSheetScrollView>
      </BottomSheet>
    </BottomSheetContext.Provider>
  );
}

export function useBottomSheetContext() {
  return useContext(BottomSheetContext);
}
