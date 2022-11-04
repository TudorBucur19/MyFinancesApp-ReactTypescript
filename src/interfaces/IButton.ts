export interface IButton {
    children: string; 
    colorScheme?: string, 
    type?: "button" | "submit" | "reset";
    style?: string;
    onClick: () => void;
}