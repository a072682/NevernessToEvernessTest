
import './_footer.scss';

function Footer(){
    return(
        <>
            <footer className="footer">
                <img className='footerBgImgSet d-none d-lg-block' src="/images/footer/indexFoot.png" alt="" />
                <div className='footerContentBox'>
                    <div className='logoBox d-none d-lg-block'>
                        <img className='logoImgSet' src="/images/footer/indexFootNte.png" alt="" />
                    </div>
                    <div className='iconBox'>
                        <a className='iconSet faceBook' href=""></a>
                        <a className='iconSet youtube' href=""></a>
                        <a className='iconSet discord' href=""></a>
                        <a className='iconSet instagram' href=""></a>
                        <a className='iconSet X' href=""></a>
                        <a className='iconSet playStation' href=""></a>
                    </div>
                    <div className='titleBox d-none d-lg-block'>
                        <img className='titleImgSet' src="/images/footer/indexFootWelcome.png" alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;