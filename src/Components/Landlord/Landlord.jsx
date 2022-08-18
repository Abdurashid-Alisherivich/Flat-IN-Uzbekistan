import React from "react";
import "./Landlord.css";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: "free",
});

export default function Landlord() {
    return (
        <div className="landlordWrapper container">
            <h1 className="landlordH1">
                Iltimos <b>Uy-Joy</b>ingiz haqidagi to'liq malumotlarni kiriting!
            </h1>
            <div className="imgUploaderLord">
                <UploadButton
                    uploader={uploader}
                    options={{ multi: true }}
                    onComplete={(files) => console.log(files)}
                >
                    {({ onClick }) => (
                        <button onClick={onClick}>Rasmni yuklang...</button>
                    )}
                </UploadButton>
            </div>

            <div className="container">
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Manzilni kiriting"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Lokatsiya linkini kiring"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <textarea
                        className="form-control mt-2 textAreaHeightLord"
                        placeholder="Uy-Joy haqida to'liq malumot yozing"
                        aria-label="With textarea"
                    ></textarea>
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Ismingizni kiriting"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Telefon raqamingizni kiriting"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Email yoki Telegram akountingizni kiriting"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Ijara narxini kiriting"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <button type="submit" className="btn btn-primary btn-lg m-2">Post holatida joylash</button>
                </form>

                <h4 className="ogohlantirishTextLord">Iltimos malumotlarni yana qaytadan tekshirib chiqing. Chunki hozirda web saytimizda
                    habarlarni tahrirlash funksiyasini qo'shganimiz yo'q. Bu funksiya ham tez kunlarda
                    siz aziz foydalanuvchilarimiz uchun qo'shiladi(:
                </h4>
            </div>
        </div>
    );
}
