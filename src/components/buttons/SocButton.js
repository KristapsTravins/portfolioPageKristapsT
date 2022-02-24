
const SocButton =(props)=> {
  console.log(props.link)
  return (
    <div onClick={()=>props.link.length!==0?window.open(props.link):<></>}className="soc_btn">
        <div className="inner_soc"> 
            {props.icon}
            <p>{props.name}</p>
        </div>
    </div>
  );
}

export default SocButton;
