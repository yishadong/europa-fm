// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010000000000000000000000000000000101000101000001010001010001010100010001010100000100010100010001000100010000000001000101010100010001000100010101010001010101010100010001000100000000000000010001000100010001010100010101000100000001000000000001000100000001000101010001010100000101000101010000000000010101010000010001000001010101000000000100000100010101000101010001010001000000000000010000010000010100010001010101000100000100010101000100010000010001010001000101010101010100000100010000010101010100000000000000000100`, img`
2 2 . . . . . . . . . . . . . . 
. 2 2 . 2 2 . . 2 2 . 2 2 . 2 2 
2 . 2 . 2 2 2 . . 2 . 2 2 . 2 . 
2 . 2 . 2 . . . . 2 . 2 2 2 2 . 
2 . 2 . 2 . 2 2 2 2 . 2 2 2 2 2 
2 . 2 . 2 . 2 . . . . . . . 2 . 
2 . 2 . 2 . 2 2 2 . 2 2 2 . 2 . 
. . 2 . . . . . 2 . 2 . . . 2 . 
2 2 2 . 2 2 2 . . 2 2 . 2 2 2 . 
. . . . 2 2 2 2 . . 2 . 2 . . 2 
2 2 2 . . . . 2 . . 2 . 2 2 2 . 
2 2 2 . 2 2 . 2 . . . . . . 2 . 
. 2 . . 2 2 . 2 . 2 2 2 2 . 2 . 
. 2 . 2 2 2 . 2 . 2 . . 2 . 2 2 
. 2 . 2 2 2 2 2 2 2 . . 2 . 2 . 
. 2 2 2 2 2 . . . . . . . . 2 . 
`, [myTiles.transparency16,sprites.castle.rock0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
