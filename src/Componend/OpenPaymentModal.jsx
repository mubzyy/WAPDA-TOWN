import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { FaTimes, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const OpenPaymentModal = ({ isOpen, onClose, onSubmit, memberData }) => {
    const [amountReceived, setAmountReceived] = useState(0)
    const [remainingBalance, setRemainingBalance] = useState(0)
    const [selectedPaymentMode, setSelectedPaymentMode] = useState("")
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            challanNo: "",
            amountReceived: "",
            paymentMode: "",
            instrumentNo: "",
            paymentDate: "",
            bankBranch: "",
        }
    })

    const watchAmount = watch("amountReceived")
    const watchMode = watch("paymentMode")

    useEffect(() => {
        if (watchAmount && memberData) {
            const remaining = Math.max(0, Number(memberData.amountDue) - Number(watchAmount))
            setRemainingBalance(remaining)
        }
    }, [watchAmount, memberData])

    const handleFormSubmit = async (data) => {
        setLoading(true)
        try {
            await new Promise(resolve => setTimeout(resolve, 500))
            if (onSubmit) {
                onSubmit(data)
            }
            reset()
            onClose()
        } finally {
            setLoading(false)
        }
    }

    if (!isOpen) return null

    const totalDue = memberData ? Number(memberData.amountDue) : 0
    const received = watchAmount ? Number(watchAmount) : 0
    const progressPercent = Math.min((received / totalDue) * 100, 100)
    const isFullPayment = received >= totalDue

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99999] animate-fade-in">
            <div className="w-[750px] max-h-[90vh] overflow-y-auto bg-gradient-to-br bg-[#d6dbcb] rounded-3xl shadow-2xl p-8 animate-slide-up">
                {/* Header with Gradient */}
                <div className="mb-8 flex justify-between items-center border-b-2 border-green-800 pb-6 bg-[#c4d3a5]  -m-8 mb-8 px-8 py-6 rounded-t-1xl">
                    <div>
                        <h2 className="text-3xl font-bold bg-blue-900 bg-clip-text text-transparent ">
                            Payment Processing
                        </h2>
                        <p className="text-sm font-semibold text-blue-900 mt-1">Complete payment details securely</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-red-500 text-3xl transition-all duration-200 hover:scale-110"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Member Info Display with Animation */}
                {memberData && (
                    <div className=" bg-[#d5e6b4] p-6 rounded-2xl mb-8 border-2 border-green-800 shadow-sm animate-fade-in-delayed">
                        <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Member Information</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 bg-[#a0af81] rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">Membership No.</p>
                                <p className="text-lg font-bold text-gray-800">{memberData.membershipNo}</p>
                            </div>
                            <div className="p-4 bg-[#a0af81]  rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">Property No.</p>
                                <p className="text-lg font-bold text-gray-800">{memberData.propertyNumber}</p>
                            </div>
                            <div className="p-4 bg-[#a0af81]  rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">Property Type</p>
                                <p className="text-lg font-bold text-blue-900">{memberData.propertyType}</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-sm hover:shadow-md transition-shadow border-2 border-red-200">
                                <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">Amount Due</p>
                                <p className="text-2xl font-bold text-red-600">Rs. {totalDue.toLocaleString()}</p>
                            </div>
                        </div>

                        {/* Payment Progress Bar */}
                        <div className="mt-6 pt-6 border-t-2 border-gray-200">
                            <div className="flex justify-between items-center mb-3">
                                <p className="text-sm font-semibold text-gray-700">Payment Progress</p>
                                <p className="text-sm font-bold text-blue-600">{Math.round(progressPercent)}%</p>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-sm">
                                <div
                                    className={`h-full transition-all duration-500 rounded-full ${
                                        isFullPayment
                                            ? 'bg-gradient-to-r from-green-400 to-green-600'
                                            : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                                    }`}
                                    style={{ width: `${progressPercent}%` }}
                                ></div>
                            </div>
                            {isFullPayment && (
                                <p className="text-xs text-green-600 font-semibold mt-2 flex items-center gap-2">
                                    <FaCheckCircle /> Full payment completed!
                                </p>
                            )}
                        </div>

                        {/* Balance Information */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                                <p className="text-xs text-gray-600 mb-1">Received</p>
                                <p className="text-lg font-bold text-green-600">Rs. {received.toLocaleString()}</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                                <p className="text-xs text-gray-600 mb-1">Remaining</p>
                                <p className="text-lg font-bold text-orange-600">Rs. {remainingBalance.toLocaleString()}</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                                <p className="text-xs text-gray-600 mb-1">Total Due</p>
                                <p className="text-lg font-bold text-blue-600">Rs. {totalDue.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="space-y-5 max-h-[400px] overflow-y-auto pr-2">
                        {/* Challan No */}
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                Challan No. <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("challanNo", {
                                    required: "Challan No. is required",
                                    minLength: {
                                        value: 3,
                                        message: "Challan No. must be at least 3 characters"
                                    }
                                })}
                                type="text"
                                placeholder="Enter Challan Number"
                                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                                    errors.challanNo
                                        ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-300"
                                        : "border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                } focus:outline-none`}
                            />
                            {errors.challanNo && (
                                <p className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-pulse">
                                    <FaExclamationCircle className="w-4 h-4" /> {errors.challanNo.message}
                                </p>
                            )}
                        </div>

                        {/* Amount Received */}
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                Amount Received (Rs.) <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("amountReceived", {
                                    required: "Amount is required",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Please enter a valid amount"
                                    },
                                    min: {
                                        value: 1,
                                        message: "Amount must be greater than 0"
                                    }
                                })}
                                type="number"
                                placeholder="Enter amount received"
                                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                                    errors.amountReceived
                                        ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-300"
                                        : "border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                } focus:outline-none font-semibold`}
                            />
                            {errors.amountReceived && (
                                <p className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-pulse">
                                    <FaExclamationCircle className="w-4 h-4" /> {errors.amountReceived.message}
                                </p>
                            )}
                        </div>

                        {/* Payment Mode */}
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                Payment Mode <span className="text-red-500">*</span>
                            </label>
                            <select
                                {...register("paymentMode", {
                                    required: "Payment mode is required"
                                })}
                                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                                    errors.paymentMode
                                        ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-300"
                                        : "border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                } focus:outline-none`}
                            >
                                <option value="">Select Payment Mode</option>
                                <option value="Cash">💵 Cash</option>
                                <option value="Check">✓ Check</option>
                                <option value="Bank Transfer">🏦 Bank Transfer</option>
                                <option value="Online">📱 Online</option>
                            </select>
                            {errors.paymentMode && (
                                <p className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-pulse">
                                    <FaExclamationCircle className="w-4 h-4" /> {errors.paymentMode.message}
                                </p>
                            )}
                        </div>

                        {/* Conditional: Instrument No - Show for Check & Bank Transfer */}
                        {(watchMode === "Check" || watchMode === "Bank Transfer") && (
                            <div className="group animate-fade-in">
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                                    Instrument No.
                                </label>
                                <input
                                    {...register("instrumentNo", {
                                        required: watchMode === "Check" || watchMode === "Bank Transfer" ? "This field is required" : false
                                    })}
                                    type="text"
                                    placeholder={watchMode === "Check" ? "Enter check number" : "Enter transaction/reference number"}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-indigo-300 bg-indigo-50 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200"
                                />
                                {errors.instrumentNo && (
                                    <p className="text-red-500 text-sm mt-2">{errors.instrumentNo.message}</p>
                                )}
                            </div>
                        )}

                        {/* Payment Date */}
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                Payment Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("paymentDate", {
                                    required: "Payment date is required"
                                })}
                                type="date"
                                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                                    errors.paymentDate
                                        ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-300"
                                        : "border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                } focus:outline-none`}
                            />
                            {errors.paymentDate && (
                                <p className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-pulse">
                                    <FaExclamationCircle className="w-4 h-4" /> {errors.paymentDate.message}
                                </p>
                            )}
                        </div>

                        {/* Conditional: Bank & Branch - Show for Bank Transfer & Online */}
                        {(watchMode === "Bank Transfer" || watchMode === "Online") && (
                            <div className="group animate-fade-in">
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                                    Bank & Branch
                                </label>
                                <input
                                    {...register("bankBranch")}
                                    type="text"
                                    placeholder="Enter bank name and branch"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-indigo-300 bg-indigo-50 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200"
                                />
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8 pt-6 border-t-2 border-gray-200">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading || !isValid}
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <FaCheckCircle className="w-4 h-4" />
                                    Submit Payment
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-up {
                    from { 
                        opacity: 0; 
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-in;
                }
                .animate-fade-in-delayed {
                    animation: fade-in 0.5s ease-in 0.1s both;
                }
                .animate-slide-up {
                    animation: slide-up 0.4s ease-out;
                }
            `}</style>
        </div>
    )
}

export default OpenPaymentModal
