import React, { Component } from 'react'
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import Socials from "../Icons/Socials";
import Image from "./project2.PNG";


export default class ProjectCard2 extends Component {
    render() {
        return (
          <ProjectWrapper>

     
          <CardImage>
          <a href = "https://githublookuplight.netlify.app/">
          <Overlay>   </Overlay>
           <Picture src = {Image} alt = "github-repo-finder"/>
           </a>
           </CardImage>
        
          

            <Card>
             <CardContent>

               <h4>Featured Project</h4>
               <h5>Github Repo finder</h5>

                <p> Github user repository search. Darkmode coming soon!    </p>
             
  
               <ul>
                 <li>React</li>
                 <li>RESTful Api</li>
                 <li>Javascript(ES6)</li>
               
               </ul>
            <Socials github = "https://github.com/tommymaher15/github-repo-finder" link = "https://githublookuplight.netlify.app/ "/>
          </CardContent>
        </Card>
        
       </ProjectWrapper>
        )
    }
}

const ProjectWrapper = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
position:relative;
`;




/* Project card Styles */ 
const Card = styled.div`
background-color:${theme.colors.Navy};
width: 100%;
@media (min-width: 768px)
 {
  padding: 20px;
  grid-column: 10/7;
};
`;
const CardImage = styled.div`
    grid-column: 2 / -7;
    width: 100%;
    height: 100%;






@media (max-width: 768px)
{ display:none; };
`

const Overlay = styled.div`

background-color: rgba(24, 16, 64, 0.54);
grid-column: 2 / -7;

width: 100%;
height: 85%;
position: absolute;
&:focus {
  background-color:rgba(24, 16, 64, 0);
}
`; 


const  Picture = styled.img`

width:100%;
  height:auto;
`;

const CardContent = styled.div`
 grid-column: 10 / 3;

h4{
  font-size: 13px;
font-weight: normal;
color: ${theme.colors.green};
font-family: "SF Mono";
font-weight:400;
margin-top: 10px;
padding-top: 0px;
}

h5{font-size: 28px;
margin: 0px 0px 20px;
color:${theme.colors.vLightSlate};
font-family:"Calibre";
font-weight:600;}


p{
  padding: 25px;
color: rgb(168, 178, 209);
font-size: 18px;
border-radius: 3px;
text-align:right;
background-color: ${theme.colors.lightNavy};
width:65%;


@media (min-width: 768px){
  
  width:110%;
}
a{
  color:${theme.colors.green};
text-decoration:none;
}
}

ul{display: flex;
flex-wrap: nowrap;
padding: 0px;
margin: 25px 0px 10px;
list-style: outside none none;
align-content:flex-start;}
li
{
padding-left:1em;
font-size: 13px;
color: ${theme.colors.vLightSlate};
margin-right: 20px;
margin-bottom: 7px;
white-space: nowrap;
}


`;


    
