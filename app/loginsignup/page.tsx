'use client'

import { GetTest, SendCode, VerifyCode } from "@/Services/login.service";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { VerifyCodeInputDto, VerifyCodeOutputDto } from "@/types/verifyCode";

export default function Loginsignup() {

    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [code, setCode] = useState<string>("")
    const [codeSent, setCodeSent] = useState<boolean>(false);

    const SendCodeHandler = (e: React.FormEvent) => {
        e.preventDefault();
        SendCode(phoneNumber);
    }

    const TheCode: VerifyCodeInputDto = { code: code, phoneNumber: phoneNumber }

    return (
        <div>
            <div className="relative w-full h-dvh flex items-center justify-center">
                {/* <div style={{ backgroundImage: "url('/bg-wood-w.webp')" }}
                    className="absolute inset-0 bg-cover bg-center"></div> */}

                <div className="w-80 md:w-90 bg-slate-300/20 backdrop-blur-lg border-[1.5px] border-slate-400/20 rounded-xl mx-5 px-10 py-7 flex flex-col gap-4">
                    <div className="flex justify-center text-lg text-shadow-md">
                        <span className="text-xl text-primary-darker">ورود / ثبت نام</span>
                    </div>

                    {codeSent ? (
                        <div className="flex flex-col gap-4">

                            <div>
                                <span className="text-xs space-x-1">کد به شماره <span className="text-blue-700">{phoneNumber}</span>ارسال شد. <span onClick={() => setCodeSent(false)} className="cursor-pointer text-blue-700">ویرایش شماره</span></span>
                            </div>
                            <form>
                                <div className="flex flex-col gap-4">
                                    <TextField
                                        label="کد ورود"
                                        variant="outlined"
                                        type="text"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                    />

                                    <button
                                        type="submit"
                                        className="group bg-primary-light py-2.5 rounded-lg
                                        shadow-md transition-all duration-300 hover:shadow-lg hover:scale-103">
                                        <span className="text-shadow-md">ثبت</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div>

                            <div className="w-full flex items-center justify-center">
                                <div className="flex gap-5">
                                    <span className="text-lg md:text-xl"><span className="text-primary-darker text-shadow-lg mx-1.5">شمارتو</span>بزن اینجا</span>
                                    <div className="w-full max-w-12 md:max-w-15 aspect-square mt-2">
                                        <img className="rotate-90" src="/arrow-gif.gif" />
                                    </div>
                                </div>

                            </div>

                            <form onSubmit={SendCodeHandler}>
                                <div className="flex flex-col gap-4">
                                    <TextField
                                        label="شماره موبایل"
                                        variant="outlined"
                                        type="text"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />

                                    <button
                                        onClick={() => setCodeSent(true)}
                                        type="submit"
                                        className="group bg-primary-light py-2.5 rounded-lg
                                        shadow-md transition-all duration-300 hover:shadow-lg hover:scale-103">
                                        <span className="text-shadow-md">ثبت</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* <div>

                        <div className="w-full flex items-center justify-center">
                            <div className="flex gap-5">
                                <span className="text-lg md:text-xl"><span className="text-primary-darker text-shadow-lg mx-1.5">شمارتو</span>بزن اینجا</span>
                                <div className="w-full max-w-12 md:max-w-15 aspect-square mt-2">
                                    <img className="rotate-90" src="/arrow-gif.gif" />
                                </div>
                            </div>

                        </div>

                        <form onSubmit={(e) => { SendCode(phoneNumber), e.preventDefault() }}>
                            <div className="flex flex-col gap-4">
                                <TextField
                                    label="شماره موبایل"
                                    variant="outlined"
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />

                                <button
                                    type="submit"
                                    className="group bg-primary-light py-2.5 rounded-lg
                                        shadow-md transition-all duration-300 hover:shadow-lg hover:scale-103">
                                    <span className="text-shadow-md">ثبت</span>
                                </button>
                            </div>
                        </form>
                    </div>


                    <div className="flex flex-col gap-4">

                        <div>
                            <span className="text-xs space-x-1">کد به شماره <span className="text-blue-700">{phoneNumber}</span>ارسال شد. <span onClick={() => setCodeSent(false)} className="cursor-pointer text-blue-700">ویرایش شماره</span></span>
                        </div>
                        <form onSubmit={(e) => {VerifyCode(TheCode), e.preventDefault()}}>
                            <div className="flex flex-col gap-4">
                                <TextField
                                    label="کد ورود"
                                    variant="outlined"
                                    type="text"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />

                                <button
                                    type="submit"
                                    className="group bg-primary-light py-2.5 rounded-lg
                                        shadow-md transition-all duration-300 hover:shadow-lg hover:scale-103">
                                    <span className="text-shadow-md">ثبت</span>
                                </button>
                            </div>
                        </form>
                    </div> */}

                </div>
            </div>
        </div>
    )
}