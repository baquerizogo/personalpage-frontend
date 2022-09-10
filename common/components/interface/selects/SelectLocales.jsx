import { faAngleDown, faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";

const SelectLocales = ({ className, value, onChange, isLoading, disabled, items, style }) => {

    const styles = {
        default: {
            inputWrapper : '',
            inputButton: 'py-1',
            listboxOption: 'py-2 px-2',
            listboxSpan: 'text-right mr-5',
            listboxIcon: ''
        },
    }

    const selectedStyle = styles[style || 'default'];

    return (
        <div className={`w-full ${className || ''}`}>
            <Listbox value={value} onChange={onChange} disabled={disabled}>
                <div className="relative">
                    <div className={`relative w-full text-left ${selectedStyle.inputWrapper}`}>
                        <Listbox.Button className={`w-full border-none ${selectedStyle.inputButton} ${disabled ? 'text-gray-400 bg-gray-100 dark:text-gray-500 dark:bg-gray-700' : ''}`}>
                            <span className={`block truncate ${selectedStyle.listboxSpan} ${value ? '' : 'text-gray-400'}`}>
                                {value == 'es' ? '🇪🇨' : value == 'en' ? '🇺🇸' : '...'}
                            </span>
                            <span className={`absolute inset-y-0 right-0 flex items-center ${selectedStyle.listboxIcon} ${disabled ? 'text-gray-400 dark:text-gray-500' : ''}`}>
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    size="sm"
                                />
                            </span>
                        </Listbox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute bg-white dark:bg-gray-800 z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg dark:border dark:border-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            { isLoading ? (
								<div className="relative cursor-default text-center select-none py-2 px-4">
									<FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
								</div>
                            ) : items?.length > 0 ? items.map((item, index) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
											`relative cursor-default select-none ${selectedStyle.listboxOption} ${active ? 'bg-primary-500 text-white' : ''
									    }`
									}
                                    value={item}
                                    disabled={item.disabled || false}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className={`block truncate text-center ${selected ? 'font-medium' : 'font-normal' }`}>
                                                {item == 'es' ? '🇪🇨' : item == 'en' ? '🇺🇸' : item}
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            )) : null}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}

export default SelectLocales;