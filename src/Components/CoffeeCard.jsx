import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, chef, quantity,  photo } = coffee;


    const handleDeleteConfirm = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/coffee/${id}`,
            {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(result =>{
                if(result.deletedCount >0){

                    Swal.fire(
                        'Deleted!',
                        'Your Coffee has been deleted.',
                        'success',
                    )

                    const remaining = coffees.filter(cof => cof._id !== id);
                    setCoffees(remaining);

                }
            })
            
            }
        })
    }
    return (
        <div className="card justify-between flex card-side bg-base-100 shadow-xl">
            <figure><img src={photo} className="w-full h-full" alt="photo" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h4><span className="font-bold">Name: </span>{name}</h4>
                    <h4><span className="font-bold">Chef: </span>{chef}</h4>
                    <h4><span className="font-bold">Quantity: </span>{quantity} piece </h4>
                </div>
                <div className="card-actions justify-end">
                    <div>
                        <div className="btn-group btn-group-vertical gap-2">
                            <button className="btn ">View</button>
                            <Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                            <button onClick={() => handleDeleteConfirm(_id)} className="btn">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;