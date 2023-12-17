import { Button } from './ui';

function Carousel() {
    return (
        <div className='carousel-center flex space-x-6'>
            <a
                href='#slide4'
                className='btn btn-circle bg-transparent border-transparent hover:bg-secondary text-lg text-primary-foreground'
            >
                ❮
            </a>
            <div id='slide1' className='carousel-item relative'>
                <div className='space-x-4'>
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
                    <Button variant={'default'} size={'m'}>
                        Hoy
                    </Button>
                    <Button variant={'default'} size={'m'}>
                        Hoy
                    </Button>
                </div>
            </div>
            <a
                href='#slide2'
                className='btn btn-circle bg-transparent border-transparent hover:bg-secondary text-lg text-primary-foreground'
            >
                ❯
            </a>
        </div>
    );
}

export default Carousel;
