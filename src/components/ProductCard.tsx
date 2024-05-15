import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface ProductCardProps {
  thumbnail: string;
  title: string;
  price: number;
  description: string;
  brand: string;
  category: string;
  rating: number;
  stock: number;
  discountPercentage: number;
}

const ProductCard = ({
  thumbnail,
  title,
  price,
  description,
  brand,
  category,
  rating,
  stock,
  discountPercentage,
}: ProductCardProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className=" bg-slate-50 rounded-lg shadow-sm p-2.5 w-full h-full">
          <img
            src={thumbnail}
            alt={title}
            className=" rounded-lg h-32 w-full"
          />
          <h3 className=" text-lg">{title}</h3>
          <p className=" text-sm">
            Price: <span className=" font-bold">{price}$</span>
          </p>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <h1>{title}</h1>
          </SheetTitle>
          <SheetDescription className=" flex flex-col">
            <img src={thumbnail} alt={title} className=" rounded-lg" />
            <p className=" text-sm">{description}</p>
            <p className=" text-sm">{brand}</p>
            <p className=" text-sm">{category}</p>
            <p className=" text-sm">{rating} stars</p>
            <p className=" text-sm">{price}$</p>
            <p className=" text-sm">{stock}</p>
            <p className=" text-sm">{discountPercentage}%</p>
            <div>
              <button className="">Update Product</button>
              <button className="">Delete Product</button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ProductCard;
