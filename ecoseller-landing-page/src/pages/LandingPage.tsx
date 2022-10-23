import Box from '@mui/material/Box';
import CustomParticles from '../components/CustomParticles';
import  Logo from "../assets/icons/logo/ecoseller.svg";
import Github from "../assets/icons/social/github.svg";
import { Typography } from '@mui/material';
import SEO from '../components/SEO';


const CommingSoon = () => {

    

    return (
        <Box>
            <SEO />
            <Box sx={{}}>
                <CustomParticles />
            </Box>

            <Box sx={{widht: '20%', position: 'fixed', top: '50%', left: '50%', '-webkit-transform': 'translate(-50%, -50%)', 'transform': 'translate(-50%, -50%)' }}>
                <img src={Logo} style={{}} />
                {/* <Typography variant="h4" sx={{color: 'black', fontWeight: '', textAlign: 'center', marginTop: '1rem' }}>coming soon</Typography> */}
                <Box sx={{width: '10%', position: 'fixed',  left: '50%', '-webkit-transform': 'translate(-50%, -50%)', 'transform': 'translate(-50%, -50%)' , marginTop: '2rem' }}>
                    <a href='https://github.com/ecoseller/ecoseller' target="_blank" rel="noreferrer">
                        <img alt="github" src={Github}/>
                    </a>
                </Box>
            </Box>
        </Box>
        // <div className='card'>
        //     <div className='header'>ls
        //     <div className='logo'>
        //         {/* <a href='.'><IconEcoseller className='icon-logo' /></a> */}
        //     </div>
        //     <div className='social'>
        //         <a href='https://github.com/ecoseller/ecoseller' title='GitHub' target='_blank' rel='noopener noreferrer'>
        //             {/* <IconGithub className='icon' /> */}
        //         </a>
        //     </div>
        //     </div>
        //     <div className='content'>
        //     <div className='title-holder'>
                
        //     </div>
        //     {/* <a href='mailto:user@example.com'>
        //         <div className='cta'>Send us an email</div>
        //     </a> */}
        //     </div>
        //     <div className='footer'>
        //         <span>made by <a className='underlined' href='https://github.com/ecoseller' target='_blank' rel='noopener noreferrer'>arkn98</a> using <a className='underlined' href='https://reactjs.org/' title='ReactJS' target='_blank' rel='noopener noreferrer'>React</a> | <a className='underlined' href='https://github.com/arkn98/coming-soon' title='GitHub repo' target='_blank' rel='noopener noreferrer'>GitHub</a></span>
        //     </div>
        // </div>
    );
}

export default CommingSoon;