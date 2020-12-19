import MathJax from 'react-mathjax2'
import React, { Component } from "react";
//import {Tex,InlineTex} from 'react-tex'
//const ascii = 'sum_(i=1)^n i^3=((n(n+1))/2)^2'
 
class MathJaxComponent extends Component {
   render(){
    let tex=this.props.ques.toString()
    return (
        <div>
            {/* <InlineTex texContent={tex} /> */
            <MathJax.Context
            input='ascii'
            onLoad={ () => console.log("Loaded MathJax script!") }
            onError={ (MathJax, error) => {
                console.warn(error);
                console.log("Encountered a MathJax error, re-attempting a typeset!");
                MathJax.Hub.Queue(
                  MathJax.Hub.Typeset()
                );
            } }
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
            options={ {
                asciimath2jax: {
                     useMathMLspacing: true,
                     delimiters: [["$$","$$"]],
                     preview: "none",
                }
            } }
        >
            <MathJax.Text text={ tex }/>
        </MathJax.Context> 
            }
        </div>
    );
   }

}

export default MathJaxComponent;