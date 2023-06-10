import styles from './Button.module.scss'

const Button = (props: any) => {

  return (
    <div className={styles.button} >
      <i className={props.iconClass}/>
    </div>
  )
}

export { Button }
