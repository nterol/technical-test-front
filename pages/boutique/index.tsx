import { useHydrateAtoms } from 'jotai/utils';

import { DefaultLayout } from '~/components/DefaultLayout';
import { CategoryList } from '~/components/category-list';
import { ProductList } from '~/components/product-list';
import products from '~/data/products.json';
import { ProductsAtom } from '~/store';

// const useStyles = (theme) => ({
//   root: { marginBottom: theme.spacing(3) },
//   h1: {
//     margin: theme.spacing(5, 0),
//   },
//   filterTitle: {
//     backgroundColor: theme.palette.primary,
//     color: theme.palette.primary.main,
//   },
//   filterListItem: {
//     paddingLeft: 0,
//   },
// });

export default function Boutique() {
  useHydrateAtoms([
    [
      ProductsAtom,
      () => {
        const productMap = new Map();
        products.forEach((product) => productMap.set(product.id, product));
        return productMap;
      },
    ],
  ]);
  return (
    <DefaultLayout>
      <main className="flex flex-col gap-2 items-center py-6">
        <section className="lol">
          <h1 className="text-6xl ">SuperShop</h1>
        </section>
        <section className="flex flex-col md:flex-row w-full p-10 gap-4">
          <CategoryList />
          <ProductList />
        </section>
      </main>
    </DefaultLayout>
  );
}

// const Boutique = (props) => {
//   const { classes } = props;

//   return (
//     <DefaultLayout>
//       <Container maxWidth="lg" className={classes.root}>
//         <Grid container justify={'center'}>
//           <Grid item>
//             <Typography variant="h3" component="h1" className={classes.h1}>
//               SuperShop
//             </Typography>
//           </Grid>
//         </Grid>

//         <Grid container>
//           <Grid item xs={12} md={3}>
//             <Typography variant="h6" className={classes.filterTitle}>
//               Catégories
//             </Typography>
//             <div className={classes.filterListContainer}>
//               <List>
//                 <ListItem className={classes.filterListItem}>
//                   <ListItemText primary="Maquillage" />
//                 </ListItem>
//                 <ListItem className={classes.filterListItem}>
//                   <ListItemText primary="Soins visage" />
//                 </ListItem>
//                 <ListItem className={classes.filterListItem}>
//                   <ListItemText primary="Parfums" />
//                 </ListItem>
//               </List>
//             </div>
//           </Grid>

//           <Grid item xs={12} md={9} className={classes.productsListContainer}>
//             <ProductsList />
//           </Grid>
//         </Grid>
//       </Container>
//     </DefaultLayout>
//   );
// };
// export default withStyles(useStyles)(Boutique);
