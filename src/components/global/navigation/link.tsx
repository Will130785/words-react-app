import { Link } from '@tanstack/react-router'

interface ICustomLinkProps {
  link: '/' | '/words' | '/view-words' | '/add-words'
  text: string
  handler?: () => void
}

const CustomLink = ({ link, text, handler }: ICustomLinkProps) => {
  return (
    <Link to={link} onClick={handler}>
      <div className="p-2 hover:bg-white hover:text-black cursor-pointer">
        {text}
      </div>
    </Link>
  )
}

export default CustomLink
