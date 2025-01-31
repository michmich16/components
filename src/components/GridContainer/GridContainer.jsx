import style from "./GridContainer.module.scss";

export const GridContainer = ({ children, columns, sx, gap, paddingTop }) => {
    const inlinestyle ={
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap:`${gap}`,
        paddingTop:`${paddingTop}`,
    }

    return(
        <div className={style.grid} style={{...inlinestyle, ...sx}}>
            {children}
        </div>
    );
}