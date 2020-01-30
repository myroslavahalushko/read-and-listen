     
            
const ElementOfTexts = ({numberOfCurrentPage}) => {
    let arrayOfAnswer = [...answer[numberOfCurrentPage - 1]];
    let arrayOfDictionary = [...dictionary[numberOfCurrentPage - 1]]; 
    let arrayOfWords = arrayOfDictionary.filter((element, index) => index % 2 == 0);
    let arrayOfTranslete = arrayOfDictionary.filter((element, index) => index % 2 !== 0);
    console.log(arrayOfWords);
    return ( 
        <div className="l_content">
            <div className = "column1">
                <div className = "l_title">
                    {textTitle[numberOfCurrentPage-1]}
                </div>
                <div className = "l_text">
                    {text[numberOfCurrentPage-1]}
                </div>
            </div>            
            <div className = "column2">
                <div className = "l_task">
                    <b>{question[numberOfCurrentPage-1]}</b>                    
                    <nav>
                        {arrayOfAnswer.map((e) => <div>{e}</div>)}
                    </nav>
                </div>
                <div className = "l_dictionary">
                    <b>Dictionary</b>                    
                    <nav>
                        {arrayOfWords.map((e, index) => <div>{e + " - " + arrayOfTranslete[index]}</div>)}
                    </nav>
                </div>
            </div>
            <div className = "column3">
                <img className = "l_image" src = {"images/text_img" + numberOfCurrentPage + ".png" }/>
                 <audio controls src = {"voices/text" + numberOfCurrentPage + ".mp3"} type="audio/music.mp3"></audio>
                 <a href = "./../../projectG/index.html" className = "backButton">Повернутися на головну сторінку</a>
            </div>
        </div>
    )
}

const ListOfText = ({currentPage, pages}) => {    
    return (
        <div className = "paginator">                
                {pages.filter(p => p >= currentPage && p <= currentPage)
                      .map((p) => { 
                        return <ElementOfTexts numberOfCurrentPage = {p} />
                })}                
        </div> 
    )
};

const ListOfTextConteiner = ({currentPage, setCurrentPage, pages, numberOfPages}) => {    
    return(
        <div className = "listener">
            <div className = "l_background"> 
                { currentPage > 1 
                    ? <div className = "button" onClick = { () => { setCurrentPage(currentPage - 1) }}></div> 
                    : <div className = "button"></div>}
                <div className = "l_window">
                    <ListOfText currentPage = {currentPage} pages = {pages}/>
                </div>
                { numberOfPages > currentPage  
                    ? <div className = "button" onClick = {() => { setCurrentPage(currentPage + 1)}}></div>
                    : <div className = "button"></div>}
            </div> 
        </div>
    )
};

  
const App = () => {
    let pages = [];
    let numberOfPages = textTitle.length;
    for(let i = 1; i <= numberOfPages; i++) pages.push(i);
    let [currentPage, setCurrentPage] = React.useState(1);
    return (
        <ListOfTextConteiner currentPage = {currentPage} 
                             setCurrentPage = {setCurrentPage} 
                             pages = {pages} 
                             numberOfPages = {numberOfPages}/>
    );
};
  

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );

