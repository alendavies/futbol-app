import { Button } from './ui';

function Carousel() {
    return (
        <div className='carousel'>
            <div id='slide1' className='carousel-item relative'>
                <div className='flex justify-between space-x-4 px-20'>
                    <Button variant={'default'} size={'m'}>
                        Hoy
                    </Button>
                    <Button variant={'default'} size={'m'}>
                        Hoy
                    </Button>
                    <Button variant={'default'} size={'m'}>
                        Hoy
                    </Button>
                    <Button variant={'default'} size={'m'}>
                        Hoy
                    </Button>
                    <Button variant={'default'} size={'m'}>
                        Hoy
                    </Button>
                </div>
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                    <a href='#slide4' className='btn btn-circle'>
                        ❮
                    </a>
                    <a href='#slide2' className='btn btn-circle'>
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
