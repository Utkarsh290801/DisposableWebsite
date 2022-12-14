// import React from 'react';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
// import Switch from '@mui/material/Switch';
// import styled from '@emotion/styled';
// import StarIcon from '@mui/icons-material/StarBorder';
// import app_config from '../../config';
// // import { makeStyles } from '@mui/material';

// const useStyles = styled(({theme}) => ({
//   section: {
//     backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   },
//   cardHeader: {
//     paddingTop: theme.spacing(3),
//   },
// }));

// export default function Pricing(props) {
//   const classes = useStyles();

//   const url = app_config.backend_url;

//   const content = {
//     'badge': 'Products & Plans',
//     'header-p1': 'Grow better',
//     'header-p2': 'with the Right Plan.',
//     'description': 'Pay for what you need when you need.',
//     'option1': 'Monthly',
//     'option2': 'Annual',

//     '01_title': 'Free',
//     '01_price': '$0',
//     '01_suffix': ' / mo',
//     '01_benefit1': '3 Emails',
//     '01_benefit2': '1 Database',
//     '01_benefit3': 'Unlimited Domains',
//     '01_benefit4': '10 GB Storage',
//     '01_primary-action': 'SignUp for free',
//     '01_secondary-action': 'Learn more',

//     '02_title': 'Pro',
//     '02_price': '$49',
//     '02_suffix': ' / mo',
//     '02_benefit1': '6 Emails',
//     '02_benefit2': '2 Database',
//     '02_benefit3': 'Unlimited Domains',
//     '02_benefit4': '25 GB Storage',
//     '02_primary-action': 'Select plan',
//     '02_secondary-action': 'Learn more',

//     '03_title': 'Enterprice',
//     '03_price': '$499',
//     '03_suffix': ' / mo',
//     '03_benefit1': '9 Emails',
//     '03_benefit2': '3 Database',
//     '03_benefit3': 'Unlimited Domains',
//     '03_benefit4': '50 GB Storage',
//     '03_primary-action': 'Select plan',
//     '03_secondary-action': 'Learn more',
//     ...props.content
//   };

//   const [state, setState] = React.useState({
//     checkbox: true,
//   });

//   const handleChange = (event) => {
//     setState({ ...state, checkbox: event.target.checked });
//   };

//   return (
//     <section className={classes.section}>
//       <Container maxWidth="lg">
//         <Box py={8} textAlign="center">
//           <Box mb={3}>
//             <Container maxWidth="sm">
//               <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
//               <Typography variant="h3" component="h2" gutterBottom={true}>
//                 <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
//                 <Typography variant="h3" component="span">{content['header-p2']}</Typography>
//               </Typography>
//               <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
//               <div>
//                 <Typography variant="subtitle1" component="span">{content['option1']}</Typography>
//                 &nbsp; <Switch name="checkbox" color="primary" checked={state.checkbox} onChange={handleChange} /> &nbsp;
//                 <Typography variant="subtitle1" component="span">{content['option2']}</Typography>
//               </div>
//             </Container>
//           </Box>

//           <Grid container spacing={3}>
//             <Grid item xs={12} md={4}>
//               <Card variant="outlined">
//                 <CardHeader title={content['01_title']} className={classes.cardHeader}></CardHeader>
//                 <CardContent>
//                   <Box px={1}>
//                     <Typography variant="h3" component="h2" gutterBottom={true}>
//                       {content['01_price']}
//                       <Typography variant="h6" color="textSecondary" component="span">{content['01_suffix']}</Typography>
//                     </Typography>
//                     <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit1']}</Typography>
//                     <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit2']}</Typography>
//                     <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit3']}</Typography>
//                     <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['01_benefit4']}</Typography>
//                   </Box>
//                   <Button variant="outlined" color="primary" className={classes.primaryAction}>{content['01_primary-action']}</Button>
//                   <Box mt={2}>
//                     <Link href="#" color="primary">{content['03_secondary-action']}</Link>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Card variant="outlined">
//                 <CardHeader title={content['02_title']} className={classes.cardHeader}></CardHeader><StarIcon/><Typography color='textSecondary'>Most Popular</Typography>
//                 <CardContent>
//                   <Box px={1}>
//                     <Typography variant="h3" component="h2" gutterBottom={true}>
//                       {content['02_price']}
//                       <Typography variant="h6" color="textSecondary" component="span">{content['02_suffix']}</Typography>
//                     </Typography>
//                     <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit1']}</Typography>
//                     <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit2']}</Typography>
//                     <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit3']}</Typography>
//                     <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['02_benefit4']}</Typography>
//                   </Box>
//                   <Button variant="contained" color="primary">{content['02_primary-action']}</Button>
//                   <Box mt={2}>
//                     <Link href="#" color="primary">{content['03_secondary-action']}</Link>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Card variant="outlined">
//                 <CardHeader title={content['03_title']} className={classes.cardHeader}></CardHeader>
//                 <CardContent>
//                   <Box px={1}>
//                     <Typography variant="h3" component="h2" gutterBottom={true}>
//                       {content['03_price']}
//                       <Typography variant="h6" color="textSecondary" component="span">{content['03_suffix']}</Typography>
//                     </Typography>
//                     <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit1']}</Typography>
//                     <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit2']}</Typography>
//                     <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit3']}</Typography>
//                     <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['03_benefit4']}</Typography>
//                   </Box>
//                   <Button variant="outlined" color="primary">{content['03_primary-action']}</Button>
//                   <Box mt={2}>
//                     <Link href="#" color="primary">{content['03_secondary-action']}</Link>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>

//           </Grid>
//         </Box>
//       </Container>
//     </section>
//   );
// }
