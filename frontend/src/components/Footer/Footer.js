import React, { Fragment } from 'react';


class Footer extends React.Component {
    render() {

        return (

            <Fragment>
                <div className="text-center">
                    <div className=" cover-container d-flex w-100 h-100 p-3 mx-auto flex-column navegar">

                        <main role="main">

                            <footer className="mastfoot mt-auto">
                                <div className="inner">
                                    <p>Términos <a href="">Politica</a>, Privacidad<a
                                        href=""> más</a>.</p>
                                </div>
                            </footer>


                        </main>
                    </div>
                </div>

            </Fragment>

        )
    }
}

export default Footer;