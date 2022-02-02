import LinkIcon from '@mui/icons-material/Link';

 const Blogpost =()=> {
  return (
    <div className="article">
    <div>
    <h4>REACT</h4>
    <h5>My experiance working with React!</h5>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.Lorem Ipsum is not simply random text</p>
    <div className='article_link'>
        <div className='inner_art_link'>
            <p><LinkIcon />Read article</p>
        </div>
    </div>
    </div>
</div>
  );
}

export default Blogpost;
