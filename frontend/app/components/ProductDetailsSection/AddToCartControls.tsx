'use client'
import {useState} from 'react'
import QuantityCounter from '../QuantityCounter'
import AddToCartButton from '../AlbumCard/AddToCartButton'

export default function AddToCartControls({albumId}: {albumId: string}) {
  const [quantity, setQuantity] = useState(1)
  const handleIncrement = () => setQuantity((prev) => prev + 1)
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1))

  return (
    <div className="flex flex-col md:flex-row justify-between items-end gap-4">
      <QuantityCounter value={quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <AddToCartButton ariaLabel="Add to cart" albumId={albumId} variant="secondary" ctaText="Add to cart" quantity={quantity} />
    </div>
  )
}
