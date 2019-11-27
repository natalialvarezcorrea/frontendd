import React,{Fragment} from 'react';
import './email.css';

function Email(){

    const body={margin: '0', padding: '0 !important', msoLineHeightRule: 'exactly', backgroundColor: '#222222'}
    const center={width:'100%', backgroundColor: '#f1f1f1'}
    const div1={display: 'none', fontSize: '1px', maxHeight: '0px', maxWidth: '0px', opacity: '0', overflow: 'hidden', msoHide: 'all', fontFamily: 'sans-serif'}
    const div2={maxWidth: '600px', margin: '0 auto'}
    const margen={margin: 'auto'}
    const padd={padding: '1em 2.5em'}
    const text={textAlign: 'center'}
    const td={backgroundImage: 'url(img/bg_1.jpg)', backgroundSize: 'cover', height: '400px'}
    const padd1={padding: '0 4em', textAlign: 'center', }
    const l71={textAlign: 'center', padding: '0 30px'}
    const l73={paddingTop: '20px', paddingRight: '10px'}
    const l84={width: '100%', maxWidth: '600px', height: 'auto', margin: 'auto', display: 'block'}
    const l88={textAlign: 'left'}
    const l108={paddingTop: '20px', paddingLeft: '10px'}
    const l113={width: '100%', maxWidth: '600px', height: 'auto', margin: 'auto', display: 'block'}
    const pd={paddingTop: '20px'}
    const l193={textAlign: 'left', paddingLeft: '5px', paddingRight: '5px'}
    const finales={textAlign: 'left', paddingLeft: '10px'}


    return(
        
        <Fragment>

<body width="100%" style={body}>



	<center style={center}>

    <div style={div1}>
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>

    <div style={div2} className="email-container">

    	

      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style={margen}>
      	<tr>
          <td valign="top" className="bg_white" style={padd}>
          	<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          		<tr>
          			<td className="logo" style={text}>
			            <h1><a href="#">Social CoWork</a></h1>
			            
			          </td>
          		</tr>
          	</table>

          </td>
	      </tr>

        


	      <tr>
          <td valign="middle" className="hero bg_white" style={td}>
          	<div className="overlay"></div>
            <table>
            	<tr>
            		<td>
            			<div className="text" style={padd1}>
            				<h2 >Gracias por confiar en nosotros</h2>
            				<p>Con el alquiler de los espacios, aportas al crecimiento de organizaciones sociales en el país</p>
            				<p><a href="#" className="btn btn-primary">Continuar</a></p>
            			</div>
            		</td>
            	</tr>
            </table>
          </td>
	      </tr>


	      <tr>
	        <td className="bg_white email-section">
	        	<div className="heading-section" style={l71}>
	          	<h2>Espacios disponibles</h2>
	          	
	        	</div>
	        	<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
	        		<tr>
	              <td valign="top" width="50%" style={l73}>
	                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
	                  <tr>
	                    <td>
	                      <img src="img/work-1.jpg" alt="" style={l84}/>
	                    </td>
	                  </tr>

    
                     


	                  <tr>
	                    <td className="text-services" style={l88}>
	                    	<p className="meta"><span>09/10/2019</span></p>
	                    	<h3>Salas de reunión</h3>
	                     	<p>Far far away, behind the word mountains, far from the countries</p>
	                     	<p><a href="#" className="btn btn-primary">Reservar</a></p>
	                    </td>
	                  </tr>
	                </table>
	              </td>

	              <td valign="top" width="50%" style={l108}>
	                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
	                  <tr>
	                    <td>
	                      <img src="img/work-2.jpg" alt="" style={l113}/>
	                    </td>
	                  </tr>
	                  <tr>
	                    <td className="text-services" style={l88}>
	                    	<p className="meta"><span>09/10/19</span> </p>
	                    	<h3>Espacios individuales</h3>
	                      <p>Far far away, behind the word mountains, far from the countries</p>
	                      <p><a href="#" className="btn btn-primary">Reservar</a></p>
	                    </td>
	                  </tr>
	                </table>
	              </td>
              </tr>


              <tr>
	              <td valign="top" width="50%" style={l73}>
	                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
	                  <tr>
	                    <td>
	                      <img src="img/work-3.jpg" alt="" style={l84}/>
	                    </td>
	                  </tr>
	                  <tr>
	                    <td className="text-services" style={l73}>
	                    	<p className="meta"><span>09/10/19</span> </p>
	                    	<h3>Oficinas</h3>
	                     	<p>Far far away, behind the word mountains, far from the countries</p>
	                     	<p><a href="#" className="btn btn-primary">Reservar</a></p>
	                    </td>
	                  </tr>
	                </table>
	              </td>
	              <td valign="top" width="50%" style={l73}>
	                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
	                  <tr>
	                    <td>
	                      <img src="img/work-4.jpg" alt="" style={l84}/>
	                    </td>
	                  </tr>
	                  <tr>
	                    <td className="text-services" style={l88}>
	                    	<p className="meta"><span>09/10/19</span> </p>
	                    	<h3>Oficinas individuales</h3>
	                      <p>Far far away, behind the word mountains, far from the countries</p>
	                      <p><a href="#" className="btn btn-primary">Reservar</a></p>
	                    </td>
	                  </tr>
	                </table>
	              </td>
              </tr>
              
	              
          	</table>
          </td>
        </tr>

      </table>
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style={margen}>
      	<tr>
          <td valign="middle" className="bg_black footer email-section">
            <table>
            	<tr>
                <td valign="top" width="33.333%" style={pd}>
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style={finales}>
                      	<h3 className="heading">Acerca de nosotros</h3>
                      	<p>Somos una plataforma virtual dedicada a ofertar oficinas y lugares de trabajo, con tu aporte estamos fortaleciendo a organizaciones socieles</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top" width="33.333%" style={pd}>
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style={l193}>
                      	<h3 className="heading">Información de contacto</h3>
                      	<ul>
					                <li><span className="text">Medellin, Colombia</span></li>
					                <li><span className="text"> 392 3929 210</span></li>

					     </ul>
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top" width="33.333%" style={pd}>
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style={finales}>
                      	<h3 className="heading">Más información</h3>
                      	<ul>
					                <li><a href="#">Home</a></li>
					                <li><a href="#">About</a></li>
					                <li><a href="#">Services</a></li>
					                <li><a href="#">Work</a></li>
					              </ul>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
        	<td valign="middle" className="bg_black footer email-section">
        		<table>
            	<tr>
                <td valign="top" width="33.333%">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style={finales}>
                      	<p>&copy; 2019 Social CoWork. All Rights Reserved</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top" width="33.333%">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style={l193}>
                      	
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
        	</td>
        </tr>
      </table>

    </div>
    
  </center>
</body>


        </Fragment>

    )
    }

export default Email;