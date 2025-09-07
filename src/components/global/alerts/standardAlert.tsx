interface IStandardAlertProps {
  text: string
}

const StandardAlert = ({ text }: IStandardAlertProps) => {
  return (
    <div className="my-4">
      <p className="text-red-400">{text}</p>
    </div>
  )
}

export default StandardAlert
