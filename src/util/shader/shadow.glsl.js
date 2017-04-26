module.exports = "@export ecgl.sm.depth.vertex\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\n\nattribute vec3 position : POSITION;\n\n#ifdef VERTEX_ANIMATION\nattribute vec3 prevPosition;\nuniform float percent : 1.0;\n#endif\n\nvarying vec4 v_ViewPosition;\n\nvoid main(){\n\n#ifdef VERTEX_ANIMATION\n    vec3 pos = mix(prevPosition, position, percent);\n#else\n    vec3 pos = position;\n#endif\n\n    v_ViewPosition = worldViewProjection * vec4(pos, 1.0);\n    gl_Position = v_ViewPosition;\n\n}\n@end\n\n\n\n@export ecgl.sm.depth.fragment\n\n@import qtek.sm.depth.fragment\n\n@end";
