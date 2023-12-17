import Carousel from '@/components/Carousel';
import { Button } from '@/components/ui';

function MatchFilter() {
    return (
        <div className='grid grid-cols-6 w-full place-items-center justify-items-start py-10  '>
            <div className='space-y-5 col-span-4'>
                <header className='text-[.875rem] flex flex-row font-bold space-x-2'>
                    <p>Mes del calendario:</p> <p>Noviembre </p> <p>·</p>
                    <a className='cursor-pointer font-normal text-primary hover:font-bold'> Volver a hoy</a>
                </header>
                <Carousel />
            </div>
            <div className='space-y-5 border-l-[1.5px] border-secondary pl-10 col-span-2'>
                <p className='font-bold text-[.875rem]'>Filtrar por tipo de partido</p>
                <div className='space-x-4'>
                    <Button variant={'default'} size={'lg'}>
                        TODOS
                    </Button>
                    <Button variant={'default'} size={'lg'}>
                        EN DIRECTO
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default MatchFilter;
