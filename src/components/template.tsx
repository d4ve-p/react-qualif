import Header from '@/components/menu/header'
import Footer from '@/components/menu/footer'
import AnimeCard from './cards/character_card';
import { useContext } from 'react';
import { ThemeContext } from '@/lib/theme_context';

function Template({children} : {children:any}){
  let { theme } = useContext(ThemeContext);
  return (
    <div>
      <Header></Header>
      <main className={`overflow-x-hidden px-2 ${theme.pageBackground} m-0`} style={{minHeight:"80vh"}}>
        {children}
        <br></br><br></br><br></br><br></br><br></br><br></br>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Template;