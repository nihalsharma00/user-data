import { useContext }from 'react'
import { ThemeContext } from './ThemeContext'
const Content = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333' , color: theme === 'light' ? '#000' : 'fff'}}>
        <p>This is the content component.</p>
    </div>
  )
}

export default Content