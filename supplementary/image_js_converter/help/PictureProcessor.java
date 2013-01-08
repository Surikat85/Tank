package model;

import com.sun.imageio.plugins.bmp.BMPImageReader;
import com.sun.imageio.plugins.bmp.BMPImageReaderSpi;
import com.sun.imageio.plugins.gif.GIFImageReader;
import com.sun.imageio.plugins.gif.GIFImageReaderSpi;
import com.sun.imageio.plugins.jpeg.JPEGImageReader;
import com.sun.imageio.plugins.jpeg.JPEGImageReaderSpi;
import com.sun.imageio.plugins.png.PNGImageReader;
import com.sun.imageio.plugins.png.PNGImageReaderSpi;
import com.sun.imageio.plugins.wbmp.WBMPImageReader;
import com.sun.imageio.plugins.wbmp.WBMPImageReaderSpi;
import java.awt.image.BufferedImage;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import javax.imageio.ImageReadParam;
import javax.imageio.ImageReader;
import javax.imageio.ImageWriter;
import javax.imageio.stream.FileCacheImageInputStream;
import javax.imageio.stream.FileImageOutputStream;
import org.primefaces.model.UploadedFile;

public class PictureProcessor {
//    класс, который обрабатывает, считанные
//    изображения (удаляет цвет, увеличивает контрастность, 
//    уменьшая тем самым размер изображения)
    
    //по типу файла, выбираем соответствующий imagereader
    public static ImageReader getImageReaderByHeader(DataInputStream dataInput) throws IOException {
        byte [] header = new byte[10];
        //по первым десяти байтам кода, можно определить тип изображения
        dataInput.read(header);
        String h = new String(header).trim();
        if(h.contains("PNG")) {
            return new PNGImageReader(new PNGImageReaderSpi());
        } else if(h.contains("GIF89")) {
            return new GIFImageReader(new GIFImageReaderSpi());
        } else if(h.contains("BM")) {
            return new BMPImageReader(new BMPImageReaderSpi());
        } else if(h.contains("JFIF")){
            return new JPEGImageReader(new JPEGImageReaderSpi());
        } else {
            return new WBMPImageReader(new WBMPImageReaderSpi());
        }
    }
    //собственно, получаем Buffered image, для последующей его обработки
    public static BufferedImage getBufferedImage(UploadedFile upfile) throws IOException {
        DataInputStream dataInput = new DataInputStream(upfile.getInputstream());
        ImageReader r = getImageReaderByHeader(dataInput);
        r.setInput(new FileCacheImageInputStream(upfile.getInputstream(), null));
        ImageReadParam param = new ImageReadParam();
        return  r.read(0, param);
    }
    //сохраняем изображение 
    public static void saveImage(BufferedImage image, File file, ImageWriter w) 
            throws FileNotFoundException, IOException {

        w.setOutput(new FileImageOutputStream(file));
        w.write(image);

        ((FileImageOutputStream)w.getOutput()).close();
    }
}