import StatusText from "./components/StatusText"
import Subtitle from "./components/Subtitle"
import Title from "./components/Title"
import styles from './App.module.css'
import Card from "./components/Card"


function App() {
  
  return (
    <div className={styles.app}>
      <Title/>
      <Subtitle/>
      <StatusText/>
      <Card title="Pôster: Star Wars(1977)" img="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" description={'Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você deicidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!'}/>
      <Card title="Nada de novo no Front" img="https://www.metroworldnews.com.br/resizer/g--43gjB-W539MKnFE0SGtq_zVw=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/4ONVBTKRMBGRVDFMOA6X5A2EDM.png" description="Nada de Novo no Front é um filme de guerra alemão de 1930, dirigido por Lewis Milestone. O enredo é baseado no livro homônimo de Erich Maria Remarque"/>
      <Card title="Besouro Azul" img="https://gsobmidia.com.br/uploads/filmes/1809/15305-medio_1692111429.jpg" description="O adolescente Jaime Reyes ganha superpoderes quando um misterioso escaravelho se prende à sua coluna e lhe fornece uma poderosa armadura alienígena azul."></Card>
    </div>
  )
}

export default App
