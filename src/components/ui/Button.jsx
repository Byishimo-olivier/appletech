import styles from './Button.module.css';

/**
 * Reusable Button Component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline'} [props.variant='primary']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {boolean} [props.isLoading=false]
 * @param {string} [props.className='']
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  className = '', 
  ...props 
}) {
  const rootClassName = [
    styles.button,
    styles[variant],
    styles[size],
    isLoading ? styles.loading : '',
    className
  ].join(' ').trim();

  return (
    <button className={rootClassName} disabled={isLoading || props.disabled} {...props}>
      {isLoading && <span className={styles.spinner}></span>}
      {children}
    </button>
  );
}
