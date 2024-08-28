
// Create
export const store = async (req, res) => {
    return res.json({
        status: "success",
        message: "Item Created Successfully",
    })
}

// Read
export const read = async (req, res) => {
    return res.json({
        status: "success",
        message: "Item Read Successfully",
    })
}

// Update
export const update = async (req, res) => {
    return res.json({
        status: "success",
        message: "Item Updated Successfully",
    })
}

// Delete
export const erase = async (req, res) => {
    return res.json({
        status: "success",
        message: "Item Deleted Successfully",
    })
}