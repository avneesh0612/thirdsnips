type modes = "development" | "production" | "test";

interface modalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface headerProps {
  onHomePage: boolean;
}

export type { modes, modalProps, headerProps }