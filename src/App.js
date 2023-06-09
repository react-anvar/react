import Card from './components/Card';
import CardStyle from './components/card.css';

function App() {
  const datas = [
    {
      headerText : 'Card Header',
      title  :'Primary Card Variant',
      lorem :'Lorem ipsum,  or lipsum as it sometimes known is dummy text used in laying out print lipsum as',
      color:'blue',
      textColor: 'light'
    },
    {
      headerText : 'Card Header',
      title  :'Primary Card Variant',
      lorem :'Lorem ipsum,  or lipsum as it sometimes known is dummy text used in laying out print lipsum as',
      color:'gray',
      textColor: 'light'
    },
    {
      headerText : 'Card Header',
      title  :'Primary Card Variant',
      lorem :'Lorem ipsum,  or lipsum as it sometimes known is dummy text used in laying out print lipsum as',
      color:'green',
      textColor: 'light'
    },
    {
      headerText : 'Card Header',
      title  :'Primary Card Variant',
      lorem :'Lorem ipsum,  or lipsum as it sometimes known is dummy text used in laying out print lipsum as',
      color:'red',
      textColor: 'light'
    },
    {
      headerText : 'Card Header',
      title  :'Primary Card Variant',
      lorem :'Lorem ipsum,  or lipsum as it sometimes known is dummy text used in laying out print lipsum as',
      color:'yellow',
      textColor: 'light'
    },
    {
      headerText : 'Card Header',
      title  :'Primary Card Variant',
      lorem :'Lorem ipsum,  or lipsum as it sometimes known is dummy text used in laying out print lipsum as',
      color:'aqua',
      textColor: 'light'
    },
    {
      headerText : 'Card Header',
      title  :'Primary Card Variant',
      lorem :'Lorem ipsum,  or lipsum as it sometimes known is dummy text used in laying out print lipsum as',
      color:'white',
      textColor: 'dark'
    },
    {
      headerText : 'Card Header',
      title  :'Primary Card Variant',
      lorem :'Lorem ipsum,  or lipsum as it sometimes known is dummy text used in laying out print lipsum as',
      color:'black',
      textColor: 'light'
    },
   
  ]
  
  return (
    <div className="App">

    {
      datas.map((item) => { 
        return <Card 
        text={item.headerText} 
         title={item.title} 
         lorem={item.lorem} 
         color={item.color}
         textColor={item.textColor}
         />

      })
    }

    </div>
  );
}

export default App;
