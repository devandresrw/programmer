import { FrontendWrapper } from '@/components/layers/Frontend';

export default function Frontend() {
    return (
        <div className='w-full h-[100vh]'>
            <div className='relative h-full w-full '>
                <div className="absolute inset-0 bg-vignette"></div>
                <FrontendWrapper />
            </div>
        </div>
    )
}