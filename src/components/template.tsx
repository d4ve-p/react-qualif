import Header from '@/components/menu/header'
import Footer from '@/components/menu/footer'
import AnimeCard from './cards/character_card';

function Template({children} : {children:any}){
  return (
    <div>
      <Header></Header>
      <main className="mb-auto h-10 overflow-x-hidden px-2" style={{"height":"80vh"}}>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Template;