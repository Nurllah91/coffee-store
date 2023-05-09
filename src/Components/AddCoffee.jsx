
const AddCoffee = () => {


const handleAddCoffee = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const quantity = form.quantity.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const addCoffee = {name, chef, quantity, taste, category, details, photo}
    console.log(addCoffee);
   
}


    return (
        <div>

            <div className="w-11/12 lg:w-9/12 mx-auto bg-[#F4F3F0] p-24 mt-10">

                <h3 className="text-3xl font-bold text-center">Add a coffee</h3>
                <p className="text-center mb-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleAddCoffee}>
                    {/* name and chef row */}
                    <div className="md:flex mb-5">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter coffee name" name='name' className="input input-bordered w-full mr-4" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Chef</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter coffee chef" name='chef' className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    
                    {/* quantity and taste row */}
                    <div className="md:flex mb-5">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Quantity" name='quantity' className="input input-bordered w-full mr-4" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Taste info" name='taste' className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* category and details row */}
                    <div className="md:flex mb-5">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Category name" name='category' className="input input-bordered w-full mr-4" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Details" name='details' className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* photo url row */}
                    <div className="mb-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Photo URL" name='photo' className="input input-bordered w-full " />
                            </label>
                        </div>
                       

                    </div>


    <input type="submit" value="Add coffee" className="btn btn-block bg-[#D2B48C] text-[#331A15] hover:text-white"  />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;