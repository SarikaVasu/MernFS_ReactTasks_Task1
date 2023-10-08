const Main = ({para,setPara,count,setCount}) => {

    const calWord = () => {
        let paraList = para.trim().split(/[ .,:;!?/()"\t\n]+/);
        if((paraList.length === 1) && (paraList[0] === '')) {
            setCount(0);
        } else if(paraList.length === 0) {
            setCount(0);
        } else {
            setCount(paraList.length);
        }    
    }

  return (
    <main>
        <textarea 
            name="para" 
            id="para"
            placeholder='Enter a paragraph to know its word count'
            value={para}
            onChange={(e) => {
                setPara(e.target.value);
                calWord();
            } } >
        </textarea>
        <article>
            Word count: {count}
        </article>
    </main>
  )

}

export default Main;