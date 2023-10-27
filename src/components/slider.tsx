import { JsxElement } from 'typescript';
import style from '../styles/components/slider.module.scss'
import { JSXElementConstructor } from 'react';

export function holizontal_slider(props: {image_urls: string[]}) {
        const modified_url = [...props.image_urls, props.image_urls[0]]
    const images = modified_url.map((url, i) => {
        return (
            <img key={i} src={url} alt="out_look" />
        );
    });
    return (
        <div className={style["slider__holizontal"]}>
            {images}
        </div>
    )
}

export function slide_in_from_left(props: {elem: JSX.Element}) {
    
}