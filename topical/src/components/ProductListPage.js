import React from 'react'
import { Grid } from '@material-ui/core'
import ProductCard from './ProductCard'

const ProductList = ({ result }) => {
  const containerStyles = {
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
    padding: '5vh',
    alignItems: 'center'
  }
  console.log(result)
  return (
    <Grid container direction='column'>
      <div style={containerStyles}>
        {!result
          ? (
            <h1>No results found</h1>
          )
          : (
            <div>
              {result.map((item) => {
                return (
                  <ProductCard
                    key={item.upc}
                    name={item.name}
                    image={item.image_url}
                    upc={item.upc}
                  />
                )
              }

              )}
            </div>
          )}
      </div>
    </Grid>
  )
}

export default ProductList