export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export type ButtonShape = 'square' | 'round';
export type ButtonProps =  {
    type?: ButtonType;
    size?: ButtonSize;
    text?: string;
    icon?: string;
    color?: string;
    loading?: boolean;
    disabled?: boolean;
    iconPrefix?: string;
    loadingSize: string;
    loadingText?: string;
    iconPosition?: 'left' | 'right';
}
 