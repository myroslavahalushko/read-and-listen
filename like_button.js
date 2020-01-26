     
            
const ElementOfTexts = ({numberOfCurrentPage}) => {
    return ( 
        <div className = "l_content">
            <div className = "column1">
                <div className = "l_title">
                    {textTitle[numberOfCurrentPage-1]}
                </div>
                <div className = "l_text">
                    {text[numberOfCurrentPage-1]}
                </div>
            </div>            
            <div className = "column2">
            <div className = "l_dictionary">
                    {dictionary[numberOfCurrentPage-1]}
                </div>
            </div>
            <div className = "column3">
                <img className = "l_image" src = {"images/text_img" + numberOfCurrentPage + ".png" }/>
                 <audio controls src = {"voices/text" + numberOfCurrentPage + ".mp3"} type="audio/music.mp3"></audio>
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

