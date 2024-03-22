import { useContext } from 'react'
import { MessageContext } from '@shared/context'
import { InfoMessage } from './InfoMessage'

export const InfoMessagesBox = () => {
    const { infoMessages } = useContext(MessageContext)!
    return (
        <div className="fixed flex justify-end w-full p-2 bottom-0 gap-2">
            {infoMessages.message && (
                <InfoMessage
                    message={infoMessages.message}
                    type={infoMessages.type === 'error' ? 'error' : 'success'}
                />
            )}
        </div>
    )
}

export default InfoMessagesBox
