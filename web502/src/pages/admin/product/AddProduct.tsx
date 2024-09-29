function AddProduct() {
  return (
    <>
      <h1>Thêm mới sản phẩm </h1>
      <div className="container">
        <form>
            {/* Tên sản phẩm */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Tên sản phẩm
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
            />
          </div>
            {/* giá sản phẩm */}
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Giá sản phẩm
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
            />
          </div>

          {/* Hình ảnh sản phẩm */}
          <div className="mb-3">
            <label htmlFor="thumbnail" className="form-label">
              Hình ảnh
            </label>
            <input
              type="text"
              className="form-control"
              id="thumbnail"
            />
          </div>

          {/* Mô tả sản phẩm */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Mô tả
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
