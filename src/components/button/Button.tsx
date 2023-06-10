import styles from './Button.module.scss'

interface Props {
  iconClass: string,
  onClick: (props: any) => void
}

const Button = ({iconClass, onClick}: Props) => {

  return (
    <div onClick={onClick} className={styles.button} >
      <i className={iconClass}/>
    </div>
  )
}

export { Button }
