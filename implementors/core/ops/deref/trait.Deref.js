(function() {var implementors = {};
implementors["ink_lang_ir"] = [{"text":"impl&lt;'a, C&gt; Deref for CallableWithSelector&lt;'a, C&gt;","synthetic":false,"types":[]}];
implementors["ink_storage"] = [{"text":"impl&lt;T&gt; Deref for StorageBox&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: SpreadLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Deref for PeekMut&lt;'_, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PackedLayout + Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Deref for ChunkRef&lt;&amp;'a mut Bits256&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Deref for Lazy&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: SpreadLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Deref for Memory&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Deref for Pack&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PackedLayout,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()