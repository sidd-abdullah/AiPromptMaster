
export default function Form({ button, formData, handelSubmit, handelChange }) {
    return (
        <form onSubmit={handelSubmit} className="max-w-6xl mx-auto py-12 px-6 md:px-0">
            <div className="space-y-12">
                <div className="pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">{button} Prompt</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Field of Prompt{" "}
                                <span className='font-normal'>
                                    (#product, #webdevelopment, #idea, etc.)
                                </span>
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        onChange={handelChange}
                                        value={formData.tag}
                                        type="text"
                                        name="tag"
                                        id="username"
                                        autoComplete="username"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="janesmith"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Your AI Prompt
                            </label>
                            <div className="mt-2">
                                <textarea
                                    onChange={handelChange}
                                    value={formData.prompt}
                                    id="about"
                                    name="prompt"
                                    rows={5}
                                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {button}
                </button>
            </div>
        </form>
    )
}
