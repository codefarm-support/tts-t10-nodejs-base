import User from "../models/User.js";

export const registerController = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);

    // validation

    // kiem tra xem co chua?

    // tao user

    const user = await User.create(req.body);
    if (!user) {
      return res.status(400).json({
        message: "khong the dang ky tai khoan, vui long kiem tra lai",
        success: false,
      });
    }

    user.password = undefined;
    return res.status(400).json({
      message: "dang ky thanh cong",
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginController = async (req, res) => {
  try {
    console.log("Dang nhap thanh cong");
  } catch (error) {
    console.log(error);
  }
};
