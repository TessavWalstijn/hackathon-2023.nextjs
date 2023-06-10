import styles from './Button.module.scss'

const Button = (props: any) => {

  return (
    <div className={styles.button} onClick={props.onClick}>
      <i className={props.iconClass}></i>
    </div>
  )
}

export { Button }
